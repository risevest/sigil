import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 16.3996 19.1598 20.1355 15.2122 21.4732L14.9859 21.5469L12.082 13.997C13.151 13.95 14.001 13.0544 14.001 12C14.001 10.8954 13.1055 10 12.001 10C10.8964 10 10.001 10.8954 10.001 12C10.001 13.0768 10.8519 13.9548 11.918 13.9983L9.01501 21.5466L8.78975 21.4732C4.84212 20.1355 2.00098 16.3996 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 14.9201 5.56547 17.4747 7.90198 18.8715L9.38145 15.023C8.5358 14.2896 8.00098 13.2073 8.00098 12C8.00098 9.79086 9.79184 8 12.001 8C14.2101 8 16.001 9.79086 16.001 12C16.001 13.2075 15.466 14.29 14.62 15.0234C15.1861 16.4969 15.6797 17.7803 16.0998 18.8729C18.4362 17.4751 20.001 14.9203 20.001 12C20.001 7.58172 16.4193 4 12.001 4Z" />
    </Svg>
  )
}

Icon.displayName = 'OpenSourceLine'

/**
 * Remix Icon: Open Source Line
 * @see {@link https://remixicon.com/icon/open-source-line Remix Icon Docs}
 */
export const OpenSourceLine = memo(Icon)
