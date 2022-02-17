import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Hero = () => {
    // Loading the hero image
    const data = useStaticQuery(graphql`
        query  heroImage {
            allImageSharp(filter: {id: {eq: "08a3fea0-50e8-5fa0-9d35-7ec3c10b8366"}}) {
            edges {
                node {
                id
                gatsbyImageData (
                    formats: [AUTO, WEBP, AVIF]
                    aspectRatio: 1.7777777777777777777777777777778
                    )
                }
            }
            }
        }
    `)
    // getting the hero image data
    const heroImage = data.allImageSharp.edges[0].node.gatsbyImageData

    return ( 
        <section className='col-span-4 col-start-2 relative'>
            <GatsbyImage image={heroImage} alt="Inside the Krutklip men's haircut shop." className='rounded-lg' />
            <div className='text-white absolute bottom-0 left-0 p-12'>
                <h1 className='text-6xl font-black pb-4'>Få en rigtig klipning med saks og kam</h1>
                <p className='text-2xl'>Det giver dig et flottere frisur, der holder sig pæn i længere tid.</p>
            </div>
        </section>
     );
}
 
export default Hero;