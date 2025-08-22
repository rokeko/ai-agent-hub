function transformToHtml(content) {
  const paragraphs = content.split('\n\n').map((p) => `<p>${p}</p>`).join('');
  return `<div>\n${paragraphs}\n</div>`;
}

module.exports = { transformToHtml };
