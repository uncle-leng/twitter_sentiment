import requests
import json
import time
import datetime 
import tweepy

consumer_key = 'sbCkN1SwzlbOUgBWJkhCLChvD'
consumer_secret = 'eO3HsqhfYGHRBQwsIKA39Wv9DGQH5dwza6dCUkbB8LcCKQAycB'
access_token = '985434587965751296-L150m5bpT6seUjC2ZiYOfJFXbRsma3N'
access_token_secret = 'HWwSavuqAXCcZGU276OCcVU8Pc7ZbMc4DwaithOerpOEr'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

def get_top_n_user(n):
	# return top n users that has posted most tweets
	res = []
	print('getting response from server....')
	response = requests.get('http://admin:cccgroup27@115.146.86.160:5984/testdb/_design/user/_view/most_post_user?group=true')

	print('parsing response...')
	res_json_list = response.json()['rows']

	print('sorting response...')
	res_json_list.sort(key=lambda x: x['value'], reverse=True)

	#for each in res_json_list[0:n]:
		#print each
	return res_json_list[0:n]


def get_user_tweets(user_id):
	# return a list contain all the tweet_json of the posted by id
	res = []
	print('getting response from the server...')
	response = requests.get('http://admin:cccgroup27@115.146.86.160:5984/testdb/_design/user/_view/user_post?reduce=false&key=' + str(user_id))
	response_dic = response.json()['rows']
	#tweet_ids =  [_['id'] for _ in response.json()['rows']]
	for each in response_dic:
		res.append(each['value'])
	#print len(res)
	return res


def get_tweets_from_location_and_date(city, start_date, end_date):
	res = []
	start_timestamp = time.mktime(time.strptime(start_date, "%d/%m/%Y"))
	end_timestamp = time.mktime(time.strptime(end_date, "%d/%m/%Y"))
	query_string = 'http://admin:cccgroup27@115.146.86.160:5984/testdb/_design/user/_view/filter_by_location_date?\
		reduce=false&startkey=' + str(start_timestamp) + '&endkey=' + str(end_timestamp)
	response = requests.get(query_string).json()['rows']

	for each in response:
		if each['value'][1] == city:
			res.append(each['value'][0])
	#print len(res)
	return res

def get_most_location_id(n):
	query_string = 'http://admin:cccgroup27@115.146.86.160:5984/testdb/_design/user/_view/user_coordinates?group=true'
	response_list = requests.get(query_string).json()['rows']
	response_list.sort(key=lambda x: x['value'], reverse=True)
	return response_list[0:n]

def get_tweet_location_coordinate(user_id):
	res = []
	print('getting response from the server...')
	response = requests.get('http://admin:cccgroup27@115.146.86.160:5984/testdb/_design/user/_view/user_post?reduce=false&key=' + str(user_id))
	response_dic = response.json()['rows']
	#tweet_ids =  [_['id'] for _ in response.json()['rows']]
	for each in response_dic:
		res.append(each['value'])
	#print len(res)
	return res

def get_user_all_tweet(user_id):
	res = []
	for tweet in tweepy.Cursor(api.user_timeline, id=user_id).items():
		res.append([tweet.text, tweet.created_at, tweet.coordinates])
	return res

# if __name__ == '__main__':

	#get_tweets_from_location_and_date('Melbourne', '28/04/2018', '30/04/2018')

