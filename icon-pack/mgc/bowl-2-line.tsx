import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M7.051 3.184a1 1 0 0 1 1.265-.633 2.245 2.245 0 0 1 1.194 3.32l-.824 1.318a.245.245 0 0 0 .13.362 1 1 0 0 1-.632 1.897A2.245 2.245 0 0 1 6.99 6.13l.824-1.318a.245.245 0 0 0-.13-.363 1 1 0 0 1-.633-1.264m4 0a1 1 0 0 1 1.265-.633 2.245 2.245 0 0 1 1.194 3.32l-.824 1.318a.245.245 0 0 0 .13.362 1 1 0 0 1-.632 1.897A2.245 2.245 0 0 1 10.99 6.13l.824-1.318a.245.245 0 0 0-.13-.363 1 1 0 0 1-.633-1.264m4 0a1 1 0 0 1 1.265-.633 2.245 2.245 0 0 1 1.194 3.32l-.824 1.318a.245.245 0 0 0 .13.362 1 1 0 0 1-.632 1.897A2.245 2.245 0 0 1 14.99 6.13l.824-1.318a.245.245 0 0 0-.13-.363 1 1 0 0 1-.633-1.264M3 11a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1c0 3.486-2.23 6.45-5.339 7.546l.037.082a1.615 1.615 0 0 1-.259 1.73A1.904 1.904 0 0 1 14 22h-4c-.545 0-1.08-.226-1.44-.642a1.615 1.615 0 0 1-.221-1.812A8.003 8.003 0 0 1 3 12zm2 1a6.003 6.003 0 0 0 4.285 5.752c.277.082.611.209.874.453.34.315.465.732.414 1.136-.036.28-.157.529-.223.659h3.3a2.062 2.062 0 0 1-.223-.66c-.05-.403.075-.82.414-1.135.263-.244.597-.371.874-.453A6.003 6.003 0 0 0 19 12z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Bowl2Line'

/**
 * MingCute Icon: Bowl 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Bowl2Line = memo(Icon)
