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
          d="M21.998 10.393c.065-2.892-1.409-5.37-3.504-6.592-1.96-1.141-4.422-1.148-6.494.538-2.072-1.686-4.534-1.68-6.494-.538-2.095 1.221-3.569 3.7-3.504 6.592.081 3.61 2.89 6.794 7.679 9.638.331.198.662.398 1.006.573.406.206.85.396 1.313.396.463 0 .907-.19 1.313-.396.344-.175.675-.375 1.006-.573 4.788-2.844 7.598-6.029 7.679-9.638m-9.155-4.121c1.508-1.526 3.25-1.554 4.644-.742 1.444.841 2.56 2.628 2.511 4.818-.01.482-.092.97-.25 1.463a2.275 2.275 0 0 1-2.879-.278l-1.293-1.294a1.854 1.854 0 0 0-2.622 0l-.865.866a2.044 2.044 0 0 1-2.89 0 .826.826 0 0 1-.001-1.169l3.517-3.519c.039-.038.074-.08.104-.122a1.09 1.09 0 0 0 .024-.023"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HeartHandFill'

/**
 * MingCute Icon: Heart Hand Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HeartHandFill = memo(Icon)
