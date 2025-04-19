/**
 * Cleanup Utilities
 * Handles removing debug elements and cleaning up the DOM
 */

export function removeDebugElements() {
  // Remove elements with attributes like log, debug, tag
  const debugElements = document.querySelectorAll('[log], [debug], [tag]');
  debugElements.forEach(el => el.remove());
  
  // Remove text nodes that contain debug info
  const bodyChildNodes = document.body.childNodes;
  for (let i = bodyChildNodes.length - 1; i >= 0; i--) {
    const node = bodyChildNodes[i];
    if (node.nodeType === Node.TEXT_NODE && 
        (node.textContent.includes('-->') || 
         node.textContent.includes('http://') || 
         node.textContent.includes('tag'))) {
      node.remove();
    }
  }
}