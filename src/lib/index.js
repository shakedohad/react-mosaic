import React from 'react'

const Mosaic = ({ images, mainImagePath, mainImageIndex, width, height, maxBlocksInRow = 20, spaceBetween = 0, onClick, mainImageStyle, secondaryImageStyle }) => {
    const finalWidth = width - ((maxBlocksInRow - 1) * spaceBetween);
    const finalHeight = height - ((maxBlocksInRow - 1) * spaceBetween);
    const blockSize = {
        width: finalWidth / maxBlocksInRow,
        height: finalHeight / maxBlocksInRow
    }

    const buildMosaic = () => {
        const content = [];
        let key = 0;
        for (let i = 0, k = 0, m = 0; i <= finalHeight - 1; i += blockSize.height, k += spaceBetween) {
            for (let j = 0, l = 0; j <= finalWidth - 1; j += blockSize.width, l += spaceBetween, m++) {
                if (m === images.length)
                    m = 0;

                const imagePath = images[m];
                const commonStyle = {
                    width: blockSize.width + "px",
                    height: blockSize.height + "px",
                    left: `${j + l}px`,
                    top: `${i + k}px`,
                    cursor: 'pointer',
                    position: 'absolute',
                    display: 'flex',
                }
                const mainImage = {
                    style: {
                        zIndex: 2,
                        background: `url(${mainImagePath || images[mainImageIndex]}) -${j}px -${i}px`,
                        opacity: Math.random() * (0.85 - 0.65) + 0.65,
                        filter: `brightness(${Math.random() * (150 - 85) + 85}%)`,
                        ...commonStyle,
                        ...mainImageStyle
                    },
                    onClick: () => onClick.call(this, imagePath),
                    className: 'main-image',
                    key: key++
                }

                const secondaryImage = {
                    style: {
                        zIndex: 1,
                        background: `url(${images[m]}) center / cover no-repeat`,
                        ...commonStyle,
                        ...secondaryImageStyle
                    },
                    className: 'secondary-image',
                    key: key++
                }

                content.push(<>
                    <div key={key++} {...mainImage}></div>
                    <div key={key++} {...secondaryImage}></div>
                </>);
            }
        }
        return content;
    }

    return (
        <div>{buildMosaic()}</div>
    )
}

export default Mosaic
