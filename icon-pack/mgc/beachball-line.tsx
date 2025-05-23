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
          d="M12 2c5.523 0 10 4.477 10 10a9.965 9.965 0 0 1-2.706 6.841l-.27.277A9.968 9.968 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2M6.343 12.707a3.5 3.5 0 0 0 0 4.95 7.975 7.975 0 0 0 6.156 2.328 5.502 5.502 0 0 1-1.913-7.825 3.502 3.502 0 0 0-4.243.547M19.985 11.5a5.508 5.508 0 0 1-7.825 1.914 3.502 3.502 0 0 0 5.463 4.275 7.975 7.975 0 0 0 2.362-6.189m-8.692-5.158a3.5 3.5 0 0 0-4.95 0A7.975 7.975 0 0 0 4.015 12.5a5.502 5.502 0 0 1 7.825-1.913 3.501 3.501 0 0 0-.547-4.243M12 4c-.168 0-.334.005-.5.015a5.502 5.502 0 0 1 1.914 7.825 3.502 3.502 0 0 0 4.243-5.497A7.975 7.975 0 0 0 12 4"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'BeachballLine'

/**
 * MingCute Icon: Beachball Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BeachballLine = memo(Icon)
