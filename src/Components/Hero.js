import React from 'react';
import "./Hero.scss";
import Cloud from './Shapes/Cloud';
import Block from './Shapes/Block';
import Cylinder from './Shapes/Cylinder';
import Plus from './Shapes/Plus';
import Image from './Shapes/Image';
function Hero() {

    return (
        <div className="hero">
            <div className="hero__text">
                <h1>Build The Things!</h1>
                <h3>Front End Developer</h3>
            </div>

            <div className="ortho">

                <Cloud />
                <Cloud />


                <Block />
                <Block child />

                <Cylinder child />




                {/* <div className="row">
                    <div className="ortho__block">
                        <div className="ortho__sides"></div>
                    </div>

                    <div className="ortho__block rounded">
                        <div className="ortho__sides back"></div>
                        <div className="ortho__shadow"></div>
                    </div>

                    <div className="ortho__block plus">
                        <div className="ortho__sides"></div>
                        <div className="ortho__block">
                            <div className="ortho__sides"></div>
                        </div>
                    </div>

                    <div className="ortho__block plus cross">
                        <div className="ortho__sides"></div>
                        <div className="ortho__block">
                            <div className="ortho__sides"></div>
                        </div>
                    </div>

                    <div className="ortho__block tick">
                        <div className="ortho__sides"></div>
                        <div className="ortho__block">
                            <div className="ortho__sides"></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="ortho__sphere"></div>

                    <div className="ortho__cylinder">
                        <div className="ortho__shadow"></div>
                    </div>

                    <div className="ortho__cylinder flat">
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                    </div>

                    <div className="ortho__hole">
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                    </div>

                    <div className="ortho__hole diamond">
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                    </div>

                    <div className="ortho__hole diamond rounded">
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                    </div>

                    <div className="ortho__hole donut">
                        <div className="ortho__shadow"></div>
                    </div>

                    <div className="ortho__hole donut flat">
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="ortho__heart">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" /></svg>
                    </div>

                    <div className="ortho__image">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 173.8 105.4"><path d="M62.2,2.7l37.9,60.5c2,3.1,6.4,3.6,9,1l23.5-23.5c2.7-2.7,7.2-2.1,9.1,1.2l31.3,54.8c2.2,3.9-0.6,8.6-5,8.6	H5.8c-4.4,0-7.2-4.7-5.1-8.6L52.3,3C54.4-0.9,59.9-1,62.2,2.7z M97.8,10.4c0,5.5,4.5,10,10,10s10-4.5,10-10s-4.5-10-10-10 S97.8,4.9,97.8,10.4z" /></svg>
                    </div>

                    <h3 className="ortho__text">
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                        <div className="ortho__shadow"></div>
                    </h3>
                </div> */}

                {/* stuff slowly floats? */}
                {/* rolling balls around content, behind and infront? - if hero slides right */}
                {/* cup, calender */}
                {/* html, js, angular, vue, react, open close brackets logos */}
                {/* clouds floating past slowly different sizes/speeds */}
                {/* some whte square to make up floor(see insp) */}
                {/* knocker thing animation */}
                {/* loading bar */}
                {/* rounded button with text that animates when clicked? links to sections? */}
                {/* file */}
                {/* chat bubble with img */}
                {/* pie chart */}
                {/* graph */}
                {/* name could be in a account tag (see insp) */}
                {/* padlock */}
                {/* typing message icon (animated?) */}
                {/* share icon */}
                {/* drag to rotate the translates? */}


            </div>

        </div >
    )
}

export default Hero
