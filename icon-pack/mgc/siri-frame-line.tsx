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
          d="M17 3.25A3.75 3.75 0 0 1 20.75 7v10A3.75 3.75 0 0 1 17 20.75H7A3.75 3.75 0 0 1 3.25 17V7A3.75 3.75 0 0 1 7 3.25zm0 1.5H7A2.25 2.25 0 0 0 4.75 7v10A2.25 2.25 0 0 0 7 19.25h10A2.25 2.25 0 0 0 19.25 17V7A2.25 2.25 0 0 0 17 4.75M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-3 4.2a1.8 1.8 0 0 0 0 3.6c.996 0 1.86-.471 2.72-1.118l.2-.152.299.29c.184.18.376.367.572.551C11.78 14.178 10.54 15 9 15c-.291 0-.573-.041-.84-.12a4.798 4.798 0 0 0 8.007-.498 2.11 2.11 0 0 1-.267.018c-.726 0-1.364-.361-1.908-.781-.27-.208-.542-.451-.811-.705l-.81-.782C11.26 11.059 10.225 10.2 9 10.2m3-3c-1.57 0-2.964.754-3.84 1.92C8.427 9.041 8.71 9 9 9c1.331 0 2.432.698 3.348 1.48l.357.317.337.316.461.446c.439.427.831.81 1.221 1.11.477.367.851.531 1.176.531a.9.9 0 1 0 0-1.8c-.351 0-.738.15-1.207.46l-.18-.163-.378-.361-.33-.321.222-.153c.55-.364 1.176-.662 1.873-.662.202 0 .398.029.583.082A4.802 4.802 0 0 0 12 7.2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SiriFrameLine'

/**
 * MingCute Icon: Siri Frame Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SiriFrameLine = memo(Icon)
