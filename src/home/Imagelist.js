import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { itemData } from '../Api/Itemdata';
import '../App.css'

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Image() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



    return (
        <>

            <div className="image-list-container">
                <ImageList className="image-list" cols={isMobile ? 2 : 3} gap={10}>
                    {itemData.map((item, index) => (
                        <ImageListItem key={`${item.img}-${index}`} className="image-card">
                            <img
                                className='Image'
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={<span>by: {item.author}</span>}
                                position="below"
                            />
                            <ImageListItemBar
                                subtitle={<span>Read More </span>}
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
      


          




        </>
    );
}
