import { useState } from 'react'
import { Tab } from '@headlessui/react'
import "./tabs.css"


export default function Tabs() {
  
  return (
    <div class="container">
    <div class="tabs">
        <input type="radio" id="radio-1" name="tabs" checked />
        <label class="tab" for="radio-1">Users</label>
        <input type="radio" id="radio-2" name="tabs" />
        <label class="tab" for="radio-2">Campaign</label>
        <input type="radio" id="radio-3" name="tabs" />
        <label class="tab" for="radio-3">Tables</label>
        <input type="radio" id="radio-4" name="tabs" />
        <label class="tab" for="radio-4">List</label>
        <span class="glider"></span>
    </div>
</div>  
  )

}
