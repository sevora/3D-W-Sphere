import os, sys
import re
from os.path import join
import json

# This is the regexp to match the naming pattern for any of the names in the folders as in <name here><sign +/-><number>
# Examples:
# magical planet-12
# happy duke+13
naming_pattern = r'([a-zA-Z ]+)((\+|-)\d+)'
planets_list = []
indices = {}

# This is the whole code to generate the planets variable
def run(root):
    textures_path = join(root, 'textures')
    displacements_path = join(root, 'displacements')
    inners_path = join(root, 'inners')

    # This sets the w, name (optional), and texture
    for filename in os.listdir(textures_path):
        object_data = {}

        if match := re.search(naming_pattern, filename, re.IGNORECASE):
            name = match.group(1)
            w_level = match.group(2)

            if name != "w":
                object_data["name"] = name.title()

            object_data["w"] = int(w_level)

        object_data["texture"] =  join('textures', filename)
        planets_list.append(object_data)
        indices[filename] = len(planets_list) - 1
    
    # It's pretty cool that I stored their indices like that 
    # now it is O(1) search and I can easily set all the displacements
    # and all the inners in the next loop
    for filename in os.listdir(displacements_path):
        index = indices[filename]
        planets_list[index]["displacement"] = join('displacements', filename)

    for filename in os.listdir(inners_path):
        index = indices[filename]
        planets_list[index]["inner"] = join('inners', filename)

    # We have to sort the entries according to their numerical w value
    planets_list.sort(key=lambda x: int(x.get('w')))
    json_string = json.dumps(planets_list, indent=8)
    result_string = "const PLANETS = " + re.sub('"([a-zA-Z ]+)":', r"\1:", json_string) + ";"
    
    # Finally save this file
    with open(join(root, 'use_as_planets_var.js'), 'w') as gen_file:
        gen_file.write(result_string)

# When running this provide the root directory to the images folder
# Expected folder has all these folders:
# <root>/textures
# <root>/displacements
# <root>/inners
if __name__ == "__main__":
    run(sys.argv[1])
