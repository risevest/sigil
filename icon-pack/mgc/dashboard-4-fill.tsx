import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-1.25 5.157a5 5 0 0 1 4.978 8.176 1 1 0 0 0 1.49 1.334A7 7 0 0 0 10.25 5.22a1 1 0 0 0 .498 1.936ZM7.156 10.75a1 1 0 0 0-1.936-.498 7.011 7.011 0 0 0 1.562 6.416 1 1 0 1 0 1.49-1.334A4.978 4.978 0 0 1 7 12c0-.433.055-.852.157-1.25ZM12 14a2 2 0 1 0-.518-3.932L7.707 6.293a1 1 0 0 0-1.414 1.414l3.775 3.775A2 2 0 0 0 12 14"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Dashboard4Fill'

/**
 * MingCute Icon: Dashboard 4 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Dashboard4Fill = memo(Icon)
