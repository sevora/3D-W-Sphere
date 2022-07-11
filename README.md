# 3D-W-Sphere

## Overview
This is a simple project that was made by request from my friend. He is writing something about the w-dimension. Anyways this is a simple 3D planet viewer. You may check it out [right here.](https://sevora.github.io/3D-W-Sphere/)

## Scripts
Use `generate_planets_variable.py` to generate a javascript file which should have the contents for the `PLANET` variable intended for `database.js`. The python script accepts a path to a folder that should have three more folders namely:
- `textures`, for outside texture of the sphere
- `displacements`, a displacement map of the sphere
- `inners`, an inside texture of the sphere

There is a naming convention for all of the images in the folders and can be a png, jpeg, and more as long as it is supported by [Three.js](threejs.org). It should follow this format of <name><sign><number>, where name is made up of letters from the alphabets and can have a space, sign is either + or -, and number ranging from 0 to 180 if a positive sign is used and ranging from 1 to 179 if negative. A given planet at a given w-level would use the textures in the folders as long as those textures have the same name and file format. Check out the existing folders for reference.
