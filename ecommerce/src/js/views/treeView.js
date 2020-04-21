import { elements } from './base';

export const rendertrees = item => {
    const markup = `<ul class="list-group">
                        <li class="list-group-item">Tree ${item}</li>
                    </ul>`;

    elements.listTrees.insertAdjacentHTML('beforeend', markup);                
}



