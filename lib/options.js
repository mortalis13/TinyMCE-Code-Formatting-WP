
jQuery(function($){
  var input=$('.mcecode-option input')
  input.each(function(id,item){
    
    $(item).keydown(function(e){
      if (e.ctrlKey) {
        var combo=getCombo(e)
        if(combo){
          item.value=combo
          e.preventDefault()
        }
      }
      
    })
    
  })
})
