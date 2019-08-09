import React from "react"
import Layout from "../components/layout"
import LeafletMap from "../components/leafletmap"

const IndexPage = () => (
  <Layout>
    <section style={{ "margin": "0.5rem 1rem" }}>
      <p>Demonstrating how to display a simple map with a marker and pop-up.</p>
      <p>For more information see <a href="https://www.andrewl.net/article/gatsby-geo-simple-map">https://www.andrewl.net/article/gatsby-geo-simple-map</a></p>
    </section>

    {typeof window !== 'undefined' &&
        <LeafletMap
          position={[52,-0.5]}
          zoom={8}
          markerText={"Hello, this is a marker"}
        />
    }

  </Layout>
  )

  export default IndexPage
