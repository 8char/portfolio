export function blurOnEscape(node: HTMLElement) {
  
    const handleKey = (event: KeyboardEvent) =>
        (event.key === 'Escape' && node && typeof node.blur === 'function') && node.blur()
    
    node.addEventListener('keydown', handleKey)
    
    return {
        destroy() {
            node.removeEventListener('keydown', handleKey)
        }
    }
}