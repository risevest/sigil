import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.0001 14V11H13.0001V14H18.0001C18.5524 14 19.0001 14.4477 19.0001 15V21C19.0001 21.5523 18.5524 22 18.0001 22H6.00015C5.44786 22 5.00015 21.5523 5.00015 21V15C5.00015 14.4477 5.44786 14 6.00015 14H11.0001ZM2.51074 8.83686C3.83432 4.86424 7.58275 2 12.0001 2C16.4176 2 20.166 4.86424 21.4896 8.83686L19.5917 9.46949C18.5328 6.29139 15.5341 4 12.0001 4C8.46623 4 5.46749 6.29139 4.40862 9.46949L2.51074 8.83686ZM6.3065 10.1021C7.10065 7.71854 9.34971 6 12.0001 6C14.6506 6 16.8996 7.71854 17.6938 10.1021L15.7959 10.7347C15.2665 9.1457 13.7671 8 12.0001 8C10.2332 8 8.73382 9.1457 8.20439 10.7347L6.3065 10.1021Z" />
    </Svg>
  )
}

Icon.displayName = 'RouterFill'

/**
 * Remix Icon: Router Fill
 * @see {@link https://remixicon.com/icon/router-fill Remix Icon Docs}
 */
export const RouterFill = memo(Icon)
