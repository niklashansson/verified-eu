import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';

window.Webflow = window.Webflow || [];

window.Webflow.push(() => {
  // Tables
  // 1) find any table targets added in webflow rich text
  const tableTargets = queryElements('[data-table]');
  if (!tableTargets) return;

  // 2) clone table that matches the target "key" and append to target
  tableTargets.forEach((target) => {
    const tableKey = target.dataset.table;
    const tableEl = queryElement(`[table-element="${tableKey}"]`);
    if (!tableEl) return;

    const newEl = tableEl.cloneNode(true);

    target.appendChild(newEl);
  });

  // table of contents links
  const tocLinks: HTMLLinkElement[] = queryElements('[data-toc-link]');
  if (!tocLinks) return;

  tocLinks.forEach((link) => {
    const slug = link.dataset.tocLink;
    link.href = `${link.href}${slug}`;
  });
});
