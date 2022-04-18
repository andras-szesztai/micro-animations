import { FC } from 'react'
import { fontSize, TFontSize } from '@styles/fontSize'
import { fontWeight, TFontWeight } from '@styles/fontWeight'

interface Props {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: TFontSize
  weight?: TFontWeight
  id?: string
  color?: string
}

const Title: FC<Props> = ({ as, children, size, weight, id, color }) => {
  return (
    <>
      {as === 'h1' && <h1 id={id}>{children}</h1>}
      {as === 'h2' && <h2 id={id}>{children}</h2>}
      {as === 'h3' && <h3 id={id}>{children}</h3>}
      {as === 'h4' && <h4 id={id}>{children}</h4>}
      {as === 'h5' && <h5 id={id}>{children}</h5>}
      {as === 'h6' && <h6 id={id}>{children}</h6>}
      <style jsx>{`
        * {
          margin: 0;
          color: ${color};
        }
        h1 {
          font-size: ${fontSize[size || 250]};
          font-weight: ${fontWeight[weight || 'bold']};
        }
        h2 {
          font-size: ${fontSize[size || 200]};
          font-weight: ${fontWeight[weight || 'bold']};
        }
        h3 {
          font-size: ${fontSize[size || 175]};
          font-weight: ${fontWeight[weight || 'bold']};
        }
        h4 {
          font-size: ${fontSize[size || 150]};
          font-weight: ${fontWeight[weight || 'medium']};
        }
        h5 {
          font-size: ${fontSize[size || 125]};
          font-weight: ${fontWeight[weight || 'medium']};
        }
        h6 {
          font-size: ${fontSize[size || 100]};
          font-weight: ${fontWeight[weight || 'medium']};
        }
      `}</style>
    </>
  )
}

Title.defaultProps = {
  size: undefined,
  weight: undefined,
  id: '',
  color: '#000',
}

export default Title
