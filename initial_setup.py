# Project: COMP90024 Cluster and Cloud Computing - Assignment 2
# Group 27, May 2018
# This program is used to create connection with NeCTAR and complete the initial setup of instances

import boto
import argparse
from pprint import pprint
import os
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

