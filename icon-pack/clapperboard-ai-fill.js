import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.893489 19.7058 0.893489 19.5293 1.31953L19.2761 1.93083C18.8442 2.97373 18.0384 3.80651 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C18.0555 6.31641 18.8471 7.11947 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379ZM20 11C20.7013 11 21.3744 10.8797 22 10.6586V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H5.99807L3.68867 7H5.99807L8.30747 3H11.9981L9.68867 7H11.9981L14.3075 3H14.3414C14.1203 3.62556 14 4.29873 14 5C14 8.31371 16.6863 11 20 11Z" />
    </Svg>
  )
}

Icon.displayName = 'ClapperboardAiFill'

/**
 * Remix Icon: Clapperboard Ai Fill
 * @see {@link https://remixicon.com/icon/clapperboard-ai-fill Remix Icon Docs}
 */
export const ClapperboardAiFill = memo(Icon)
