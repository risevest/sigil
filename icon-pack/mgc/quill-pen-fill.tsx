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
          d="M6.81 17.844c-.032.247-.273 2.729-.31 3.156-.047.54-.448 1-1 1a1 1 0 0 1-1-1c0-.571.116-1.67.221-2.56.205-1.732.446-3.427.987-5.09.625-1.92 1.75-4.379 3.757-6.386 3.934-3.934 9.652-4.515 9.797-4.53a1.005 1.005 0 0 1 .944.454c.991 1.49.747 3.71-.467 5.007a1 1 0 0 1-.03.37 15.73 15.73 0 0 1-.75 2.135c-.551 1.263-1.328 2.54-2.423 3.636-2.05 2.05-4.742 2.991-6.844 3.43a19.352 19.352 0 0 1-2.883.378Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'QuillPenFill'

/**
 * MingCute Icon: Quill Pen Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const QuillPenFill = memo(Icon)
