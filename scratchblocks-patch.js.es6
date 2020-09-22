function scratchblocksPatch(state, silent) {
md.inline.bbcode.ruler.push('underline', {
    tag: 'scratchblocks',
    wrap: 'p'
});
}
export function setup(helper) {
   if(!helper.markdownIt) { return; }

   helper.registerOptions((opts,siteSettings)=>{
      opts.features.['scratchblocks_patch'] = !!siteSettings.scratchblocks_patch_enabled;
   });

   helper.registerPlugin(md=>{
      md.inline.push('p', pMarkdownItInline);
   });
}
