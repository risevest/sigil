import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="m20.43 5.865.078.699.072.767.036.448.051.75.03.55.038.894.019.641.012.675.004.707-.004.707-.012.675-.019.641-.024.606-.028.569-.05.78-.035.47-.09.986-.079.698a1.332 1.332 0 0 1-1.844 1.065l-.49-.213-.846-.386-.62-.298-.458-.226-.748-.381-.538-.283-.566-.306-.594-.329-.619-.353-.615-.36-.582-.349-.809-.5-.73-.47-.443-.292-.406-.274-.54-.373-.587-.42-.43-.319a1.332 1.332 0 0 1 .002-2.13l.325-.242.422-.306.517-.363.607-.414.694-.458.51-.327.546-.342.581-.355.617-.366.32-.186c.208-.12.412-.237.613-.349l.588-.326.563-.304.793-.414.725-.365.442-.215.597-.283.802-.362.355-.154a1.332 1.332 0 0 1 1.846 1.065ZM6 5a1 1 0 0 1 .993.883L7 6v12a1 1 0 0 1-.883.993L6 19H5a1 1 0 0 1-.993-.883L4 18V6a1 1 0 0 1 .883-.993L5 5z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'SkipPreviousFill'

/**
 * MingCute Icon: Skip Previous Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const SkipPreviousFill = memo(Icon)
