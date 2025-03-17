import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.5 16.5H6.59C6.87 14.83 7.83 13.4 9.19 12.5H5.5V16.5Z" />
      <Path d="M3.5 18.5V4.5H17.5V11.5H18.5C18.84 11.5 19.17 11.54 19.5 11.59V4.5C19.5 3.4 18.6 2.5 17.5 2.5H3.5C2.4 2.5 1.5 3.4 1.5 4.5V18.5C1.5 19.6 2.4 20.5 3.5 20.5H7.31C6.96 19.89 6.71 19.22 6.59 18.5H3.5Z" />
      <Path d="M9.5 6.5H5.5V10.5H9.5V6.5Z" />
      <Path d="M15.5 6.5H11.5V10.5H15.5V6.5Z" />
      <Path d="M14.5 19.5H12.5C11.4 19.5 10.5 18.6 10.5 17.5C10.5 16.4 11.4 15.5 12.5 15.5H14.5V13.5H12.5C10.29 13.5 8.5 15.29 8.5 17.5C8.5 19.71 10.29 21.5 12.5 21.5H14.5V19.5Z" />
      <Path d="M18.5 13.5H16.5V15.5H18.5C19.6 15.5 20.5 16.4 20.5 17.5C20.5 18.6 19.6 19.5 18.5 19.5H16.5V21.5H18.5C20.71 21.5 22.5 19.71 22.5 17.5C22.5 15.29 20.71 13.5 18.5 13.5Z" />
      <Path d="M18.5 18.5V16.5H12.5V18.5H18.5Z" />
    </Svg>
  )
}

Icon.displayName = 'DatasetLinked'

/**
 * Material Icon: Dataset Linked
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dataset_linked Material Icon Docs}
 */
export const DatasetLinked = memo(Icon)
