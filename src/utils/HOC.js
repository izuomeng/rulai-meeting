import React from 'react'

export const InjectClass = MyComponent => ({ className, ...others }) => (
  <MyComponent {...others} className={className} />
)
