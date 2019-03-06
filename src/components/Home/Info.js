import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda esse perspiciatis alias ipsam soluta reprehenderit
              ratione odit architecto eligendi natus est a recusandae illum
              quis, accusamus itaque cumque. Ad incidunt ipsum omnis cum beatae.
              Mollitia provident rem obcaecati incidunt similique ipsum
              doloribus voluptas excepturi commodi exercitationem laboriosam
              inventore sapiente aliquam, reprehenderit deserunt nam sint?
              Deserunt minus rerum, sint consequuntur quaerat delectus, sit odio
              repellat obcaecati, corrupti rem ipsam quod!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
