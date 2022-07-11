# 3D-W-Sphere

## Overview
This is a simple project that was made by request from my friend. He is writing something about the w-dimension. Anyways this is a simple 3D planet viewer. You may check it out [right here.](https://sevora.github.io/3D-W-Sphere/)

## Scripts
Use `generate_planets_variable.py` to generate a javascript file which should have the contents for the `PLANET` variable intended for `database.js`. The python script accepts a path to a folder that should have three more folders namely:
- `textures`, for outside texture of the sphere
- `displacements`, a displacement map of the sphere
- `inners`, an inside texture of the sphere

There is a naming convention for all of the images in the folders and can be a png, jpeg, and more as long as it is supported by [Three.js](threejs.org). It should follow this format of `<name><sign><number>`, where name is made up of letters from the alphabets and can have a space, sign is either + or -, and number ranging from 0 to 180 if a positive sign is used and ranging from 1 to 179 if negative. A given planet at a given w-level would use the textures in the folders as long as those textures have the same name and file format. Check out the existing folders for reference.

## Entries in `database.js`
In `database.js` we can find two variables called `REGIONS` and `PLANETS`. Both are an array of objects. Below is a detailed look at the `REGIONS` array:
```js
const REGIONS = [
        { 
            name: "Region Name", // the region name that gets displayed
            start: 0,            // the starting w-level value at which the region name will appear
            end: 130             // the ending w-level value at which the region name will appear
        }, // you may add more regions in the same format
] 
// Note: it doesn't matter if either start or end is greater than or lesser than one another
```

For the `PLANETS` variable it should look like this:
```js
const PLANETS = [
        {
            name: "Planet A",                     // (optional field) the name of planet at given w
            description: "Lorem Ipsum",           // (optional field) the description of planet at given w
            w: 13,                                // the w value at which the planet should appear
            texture: "path/to/texture.png",       // the path to the texture
            displacement: "path/to/texture.png",  // (optional field) path to displacement map
            inner: "path/to/texture.png",         // (optional field) path to texture for inside
            rotateInside: true                    // (optional field) inside texture rotates independently if truthy
        }
        // You may add more entries as you wish separated by a comma
]
```

Since it can be a hassle to manually write all the entries for the planets in the `PLANETS` variable, a python script was written in order to automate such process. Simply follow the rules set on its section and it can be utilized.
The current version only supports 360 individual planets but that could easily be extended by making the input slider code to have a dynamic max length, min length or you can simply make its range larger. 
