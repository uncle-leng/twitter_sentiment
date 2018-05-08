# Project: COMP90024 Cluster and Cloud Computing - Assignment 2
# Group 27, May 2018
# This program is used to create connection with NeCTAR and complete the initial setup of instances

import boto
import argparse
from pprint import pprint
import os
import errno
import time
from boto.ec2.regioninfo import RegionInfo

# Create the region object to specify the endpoint and availability zone.
region = RegionInfo(name='melbourne', endpoint='nova.rc.nectar.org.au')

# The access key and secret key are used to connect to NeCTAR
# To get these credentials, log in to NeCTAR dashboard -> Project -> Access & Security -> API Access -> View Credentials
access_key = '1f8c696991734d63b1f4ecc8c46d143b'
secret_key = '1920c39d3bf742bf9edb0dc479047dae'

Availiability_Zone = 'melbourne-qh2'
Default_Image_ID = 'ami-190a1773'

# Create the connection object to setup the connection with nectar
conn = boto.connect_ec2(aws_access_key_id=access_key,
							 aws_secret_access_key=secret_key,
							 is_secure = True,
							 region = region,
							 port = 8773,
							 path='/services/Cloud',
							 validate_certs=False)

img = conn.get_image(Default_Image_ID)

def get_all_instance_ids():
    return map(lambda x: x.instances[0].id, conn.get_all_instances())

def get_instance(instance_id):
    return conn.get_all_instances(instance_id)[0].instances[0]

def terminate_instance(instance_id):
    return get_instance(instance_id).terminate()

def instance_status(instance_id, status, wait_loop = 50):
    init_loop = 0
    while init_loop < wait_loop:
        time.sleep(5)
        if get_instance(instance_id).state == status and get_instance(instance_id).private_ip_address is not None:
            print(get_instance(instance_id).private_ip_address)
            return True
        init_loop = init_loop + 1
    return False

def get_hosts(instances):
    hosts = []
    node = 1
    for i in instances:
        if instance_status(i.id, 'running'):
            hosts.append(get_instance(i.id).private_ip_address)
            name = "Node"+str(node)
            get_instance(i.id).add_tag("Name", name)
            node = node + 1
    print(hosts)
    return hosts

def write_to_hosts(hosts):
    try:
        os.remove('/etc/ansible/hosts')
    except OSError as e:
        if e.errno != errno.ENOENT: #no such file or directory
            # re-raise exception if a different error occurred
            raise
    # web_host = hosts[0]
    master = hosts[0]
    node_index = 1
    with open('/etc/ansible/hosts', 'a') as f:
        f.write("[master]"+"\n")
        f.write("node"+str(node_index)+" "+"ansible_ssh_host="+master+" "+"ansible_user=ubuntu ansible_ssh_private_key_file=/etc/ansible/cloudkey.pem"+"\n")
        f.write("[cluster]"+"\n")
        for ip in hosts:
            f.write("ubuntu@"+ip+" "+"ansible_user=ubuntu ansible_ssh_private_key_file=/etc/ansible/cloudkey.pem"+"\n")
        f.write("[othernodes]"+"\n")
        for ip in hosts:
            if ip is hosts[0]:
                continue
            else:
                node_index = node_index + 1
                f.write("node"+str(node_index)+" "+"ansible_ssh_host="+ip+" "+"ansible_user=ubuntu ansible_ssh_private_key_file=/etc/ansible/cloudkey.pem"+"\n")
    f.close()

def create_instances(num_instance, max_loop = 10):
	instance_list = []
	for i in range(num_instance):
		instance_list.append(
			conn.run_instances(
				Default_Image_ID,
				key_name='cloudkey',
				instance_type='m1.small',
				security_groups=['ssh', 'default', 'http', 'icmp', 'couch_cluster'],
				placement=Availiability_Zone)
		)
	instances = map(lambda x: x.instances[0], instance_list)
	print instances
	hosts = get_hosts(instances)
	# print hosts
	write_to_hosts(hosts)

# create_instances(2)

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-n', type=int, default=1, help='instance count')
    parser.add_argument('-o', type=str, help='start or terminate')
    args = parser.parse_args()
    if not args.o:
        parser.print_help()
        exit(1)
    if args.o.lower() == 'start':
        create_instances(args.n)
    elif args.o.lower() == 'terminate':
        for ins_id in get_all_instance_ids():
            terminate_instance(ins_id)

