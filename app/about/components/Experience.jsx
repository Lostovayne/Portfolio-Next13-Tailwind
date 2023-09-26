const ListItems = [
    {
        id: 1,
        title: 'Acerca de',
        href: '#about',
    },
    {
        id: 2,
        title: 'Experiencia',
        href: '#experiencia',
    },
    {
        id: 3,
        title: 'Proyectos',
        href: '#proyectos',
    },
];

export const Experience = () => {
    return (
        <div>
            <ul className='uppercase space-y-4'>
                {ListItems.map((item) => (
                    <li className='flex items-center cursor-pointer hover:text-[#fff7ed] group transition-colors  w-max '>
                        <div className='h-[2px] bg-[#cdbfac] min-w-[35px] mr-2 group-hover:bg-[#fff7ed] group-hover:min-w-[60px] transition-all duration-500'></div>
                        <a href={item.href} className='inline-block font-medium text-base'>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
