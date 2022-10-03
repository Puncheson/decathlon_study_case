type TMods = Record<string, boolean | string>

export function classNames(cls:string, mods: TMods = {}, additional: string[] = [] ): string {
    return [
        cls, 
        ...additional.filter(Boolean),
        ...Object.entries(mods)
        .filter(([_className, value]) => Boolean(value))
        .map(([className]) => className)
    ]
        .join(' ');
}


classNames( 'remove-btn', {hovered: true, selectable:true, red: true}, [])