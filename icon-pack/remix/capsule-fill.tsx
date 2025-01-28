import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.7786 4.22184C22.1217 6.56498 22.1217 10.364 19.7786 12.7071L17.6565 14.8277L12.7075 19.7782C10.3643 22.1213 6.56535 22.1213 4.2222 19.7782C1.87906 17.435 1.87906 13.6361 4.2222 11.2929L11.2933 4.22184C13.6364 1.87869 17.4354 1.87869 19.7786 4.22184ZM14.8288 14.8284L9.17195 9.17158L5.63642 12.7071C4.07432 14.2692 4.07432 16.8019 5.63642 18.364C7.19851 19.9261 9.73117 19.9261 11.2933 18.364L14.8288 14.8284Z" />
    </Svg>
  )
}

Icon.displayName = 'CapsuleFill'

/**
 * Remix Icon: Capsule Fill
 * @see {@link https://remixicon.com/icon/capsule-fill Remix Icon Docs}
 */
export const CapsuleFill = memo(Icon)
