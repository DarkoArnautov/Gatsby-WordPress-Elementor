import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from '../components/image'
import Text from '../components/text'

const components = {
  Image: Image,
  Text: Text
}

function ucwords(text) {
  let str = text.toLowerCase();
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
    function (s) {
      return s.toUpperCase();
    });
}

const blogPostTemplate = (data) =>{ 
  console.log(data)
  const elementorData = JSON.parse(data.pathContext.elementorData);
  console.log({elementorData})

  

  return(
    <Layout>
      <SEO title="Home" />

      <div dangerouslySetInnerHTML={{ __html: data.pathContext.content }} />
      
    </Layout>
  )
}


export default blogPostTemplate
