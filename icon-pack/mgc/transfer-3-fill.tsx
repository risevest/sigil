import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M8.56 11.9a1.5 1.5 0 0 1 0 2.12l-.974.976H16a1.5 1.5 0 0 1 0 3H7.586l.975.974a1.5 1.5 0 1 1-2.122 2.122l-3.535-3.536a1.5 1.5 0 0 1 0-2.121l3.535-3.536a1.5 1.5 0 0 1 2.122 0Zm6.88-9a1.5 1.5 0 0 1 2.007-.104l.114.103 3.535 3.536a1.5 1.5 0 0 1 .103 2.007l-.103.114-3.535 3.536a1.5 1.5 0 0 1-2.225-2.008l.103-.114.975-.974H8a1.5 1.5 0 0 1-.144-2.994L8 5.996h8.414l-.975-.975a1.5 1.5 0 0 1 0-2.122Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Transfer3Fill'

/**
 * MingCute Icon: Transfer 3 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Transfer3Fill = memo(Icon)
