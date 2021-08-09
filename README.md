# What is this?

A library that help you build your own dynamic moasaic.

# Installation

`npm i --save react-mosaic`

# How to use it?

```
import Mosaic from 'mosaic';


const Example = () => {
    const props = {
        images: ['./assets/img0.jpg', './assets/img1.jpg', './assets/img2.jpg', './assets/img3.jpg'...],
        mainImagePath: './assets/img4.jpg'
        // mainImageIndex: 2, we choose to use either mainImagePath or mainImageIndex
        width: 800,
        height: 500,
        maxBlocksInRow: 17,
        spaceBetween: 1,
        mainImageStyle: { opacity: 0.5 },
        secondaryImageStyle: { ... },
        onClick: (url) => window.open(url, '_blank')
    }
    return <Mosaic {...props} />
}
```

## Options

Field | Type |  | Description
--- | --- | --- | --- |
images | array  | mandatory| array of images' path
mainImagePath | string | optional (in case mainImageIndex is supplied) | image path of main image
mainImageIndex | number | optional (in case imagePath is supplied) | index number of the main image in 'images' array
width | number | mandatory | main image width
height | number | mandatory | main image height
maxBlocksInRow | number | mandatory (default is 20) | how many blocks in a row/column
spaceBetween | number | optional (default is 0) | space between each block
mainImageStyle | object | optional | css for main image
secondaryImageStyle | object | optional | css for secondary images
onClick | function | optional | action in case of clicking a block, receives url

## Important Notes
- Each piece in the mosaic is represented by a div, and has a class which you can use to your own benefit. If it a piece that belongs to the main image it will have a *main-image* class: ```<div class="main-image" ..>``` / If it a piece that belongs to one of the secondary images, it will have a *secondary-image* class: ```<div class="secondary-image" ..>```
- Each div of the main image receives a random opacity number between 0.65 to 0.85. You can override this behavior with your own, by passing a styling object for the main image to the Mosaic component.
- Each div of the main image receives a random brightness percentage between 85 to 150. You can override this behavior with your own, by passing a styling object for the main image to the Mosaic component.