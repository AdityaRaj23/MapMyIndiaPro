import requests
import json

def get_distance_matrix(rest_key, resources, profile, geopositions):
    url = f"https://apis.mappls.com/advancedmaps/v1/{rest_key}/{resources}/{profile}/{geopositions}"
    response = requests.get(url)
    return response.json()

# Example
rest_key = 'ef0e03eca3a26a3218b5f828412a486b'
resources = 'distance_matrix'
profile = 'driving'
geopositions = 'DDT7VL;U9NU7W;8A8463;943OFH;17HR1X'  #! Example, provide your own geopositions its usign elocs in format eloc1;eloc2;eloc3;eloc4;eloc5

response = get_distance_matrix(rest_key, resources, profile, geopositions)
print(response)
# Convert the response to JSON format
json_response = json.dumps(response)

# Write the JSON response to a file
with open('response.json', 'w') as outfile:
    outfile.write(json_response)