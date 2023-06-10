import { test, expect } from '@playwright/test'

test('表格右对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-align/align-grid-align-right-grid-align')
  await expect(page.getByRole('cell', { name: 'GFD科技YX公司' })).toHaveCSS('text-align', 'right')
})
