import {cn} from "@/lib/utils";

interface Props {
    className?: string;
}

export const Categories = (props: Props) => {
    const {className} = props;
    const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты', 'Десерты'];
    const activeIndex = 0;

    return <div className = {cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>

        {cats.map((cat, index) => {
            return (
                <a className = {cn('flex items-center font-bold h-11 rounded-2xl px-5', activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary')}
                   key = {index}>
                    <button>{cat}</button>
                </a>
            )
        })}

    </div>
}
