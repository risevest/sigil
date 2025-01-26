import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.80777 1.3934L21.1925 19.7782L19.7783 21.1924L16.0316 17.4454L12 21.485L3.52154 12.993C1.48186 10.7094 1.49309 7.24014 3.55524 4.96959L1.39355 2.80762L2.80777 1.3934ZM4.98009 11.6232L12 18.6543L14.6176 16.0314L4.97206 6.38623C3.67816 7.88265 3.67138 10.121 4.98009 11.6232ZM20.2428 4.75736C22.5054 7.02472 22.5831 10.637 20.4788 12.993L18.8442 14.629L17.4302 13.215L19.0202 11.6232C20.3937 10.0467 20.3191 7.66525 18.8271 6.1701C17.3281 4.66794 14.9078 4.60702 13.3371 6.01688L12.0021 7.21524L10.6662 6.01781C10.3163 5.70415 9.92487 5.46325 9.51117 5.29473L7.2604 3.04551C8.92926 2.83935 10.6682 3.33369 12.0011 4.52853C14.3502 2.42 17.9802 2.49 20.2428 4.75736Z" />
    </Svg>
  )
}

Icon.displayName = 'DislikeLine'

/**
 * Remix Icon: Dislike Line
 * @see {@link https://remixicon.com/icon/dislike-line Remix Icon Docs}
 */
export const DislikeLine = memo(Icon)
