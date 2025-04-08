"use client"

import React, { useState } from "react"
import { cn } from "./utils"

export const Tabs = ({ defaultValue, className, children, value: controlledValue, onValueChange, ...props }) => {
  const [internalValue, setInternalValue] = useState(defaultValue)

  // Use controlled value if provided, otherwise use internal state
  const value = controlledValue !== undefined ? controlledValue : internalValue
  const setValue = onValueChange || setInternalValue

  // Safely filter children
  const childrenArray = React.Children.toArray(children)

  // Find TabsList - safely handle if not found
  const tabsList = childrenArray.find((child) => child?.type === TabsList)

  // Find TabsContent items - safely handle if none found
  const tabsContent = childrenArray.filter((child) => child?.type === TabsContent)

  // Only modify TabsList if it exists
  const modifiedTabsList = tabsList
    ? React.cloneElement(tabsList, {
        value,
        onValueChange: setValue,
      })
    : null

  // Only modify TabsContent items if they exist
  const modifiedTabsContent = tabsContent.map((content) =>
    React.cloneElement(content, {
      value,
      isActive: content.props.value === value,
    }),
  )

  return (
    <div className={cn("", className)} {...props}>
      {modifiedTabsList}
      {modifiedTabsContent}
    </div>
  )
}

export const TabsList = ({ className, children, value, onValueChange, ...props }) => {
  // Safely handle if children is undefined
  if (!children) return null

  // Safely modify children
  const modifiedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    return React.cloneElement(child, {
      isActive: child.props.value === value,
      onClick: () => onValueChange(child.props.value),
    })
  })

  return (
    <div
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className,
      )}
      {...props}
    >
      {modifiedChildren}
    </div>
  )
}

export const TabsTrigger = ({ className, children, isActive, ...props }) => (
  <button
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      isActive ? "bg-background text-foreground shadow-sm" : "hover:bg-background/50 hover:text-foreground",
      className,
    )}
    {...props}
  >
    {children}
  </button>
)

export const TabsContent = ({ className, children, value, isActive, ...props }) => {
  if (!isActive) return null

  return (
    <div
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
