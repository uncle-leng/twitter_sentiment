from couchdb import *
import tweepy
import json
import time

server = Server('http://127.0.0.1:5984/')
if 'testdb' not in server:
    db = server.create('testdb')
else:
    db = server['testdb']


consumer_key = 'sbCkN1SwzlbOUgBWJkhCLChvD'
consumer_secret = 'eO3HsqhfYGHRBQwsIKA39Wv9DGQH5dwza6dCUkbB8LcCKQAycB'
access_token = '985434587965751296-L150m5bpT6seUjC2ZiYOfJFXbRsma3N'
access_token_secret = 'HWwSavuqAXCcZGU276OCcVU8Pc7ZbMc4DwaithOerpOEr'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

while True:
    for each_twitter in tweepy.Cursor(api.search,
                                q='* -filter:retweets',
                                count=100,
                                geocode='-37.184,144.96,1000km').items(100):
        if 'RT @' not in each_twitter.text:
            try:
                each_twitter_id = each_twitter.id_str
                each_twitter_json = each_twitter._json
                #tmp = {each_twitter_id: each_twitter_json}
                each_twitter_json['_id'] = each_twitter_id
                db.save(each_twitter_json)
            except ResourceConflict:
                continue
    time.sleep(5)














'''
my_id = api.get_user('shushuleng')._json['id']
queue = [my_id]
while queue:
    cur_user_id = queue.pop(0)
    cur_friends_ids = api.friends_ids(cur_user_id)
    queue += cur_friends_ids
    cur_twitters = api.user_timeline(cur_user_id)
    for each_twitter in cur_twitters:
        each_twitter_id = each_twitter._json['id_str']
        each_twitter_json = each_twitter._json
        tmp = {each_twitter_id: each_twitter_json}
        db.save(tmp)
        time.sleep(2)
'''





