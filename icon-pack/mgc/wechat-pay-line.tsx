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
          d="M12 5c-4.597 0-8 3.073-8 6.5 0 2.014 1.141 3.872 3.042 5.096.427.276.648.688.766 1.022.137.384.19.794.206 1.2.38-.156.674-.433 1.004-.67v-.001c.15-.108.591-.424 1.168-.315.582.11 1.189.168 1.814.168 4.597 0 8-3.073 8-6.5 0-.91-.231-1.782-.657-2.578l-9.306 5.922a1 1 0 0 1-1.405-.348l-2-3.5a1 1 0 0 1 1.383-1.353l1.58.947a1 1 0 0 0 .944.046l7.371-3.51C16.463 5.836 14.37 5 12 5M2 11.5C2 6.643 6.656 3 12 3c3.454 0 6.552 1.49 8.362 3.83C21.389 8.16 22 9.764 22 11.5c0 4.857-4.656 8.5-10 8.5-.653 0-1.292-.053-1.911-.155-.093.073-.253.205-.45.344C9.07 20.59 8.249 21 7 21a1 1 0 0 1-1-1c0-.389.046-.742.009-1.229-.014-.174-.03-.366-.103-.527C3.577 16.723 2 14.298 2 11.5"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'WechatPayLine'

/**
 * MingCute Icon: Wechat Pay Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const WechatPayLine = memo(Icon)
