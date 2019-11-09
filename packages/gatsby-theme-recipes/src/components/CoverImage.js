/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Img from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"

const componentStyles = css`
  float: right;
  position: relative;
  width: 60%;
  clip-path: circle(45%);
  shape-outside: circle(54%);
  overflow: hidden;
  @media (min-width: 420px) {
    width: 50%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    > div {
      padding-bottom: 100% !important;
    }
  }
`

const CoverImage = ({ image, alt = "", ...props }) => {
  const duration = 3
  const delay = 0.2

  const variants = {
    initial: {
      transform: "scale(1.1)",
      transformOrigin: "center"
    },
    enter: {
      transform: "scale(1)",
      transition: {
        duration,
        delay,
        when: "beforeChildren"
      }
    },
    exit: {
      transform: "scale(1.1)",
      transition: { duration }
    }
  }
  return (
    <AnimatePresence>
      <div css={componentStyles}>
        <motion.div
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          {...props}
        >
          <Img fluid={image.sharp.fluid} alt={alt} />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default CoverImage
