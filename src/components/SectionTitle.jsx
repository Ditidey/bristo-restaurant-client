 

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-500 mb-2 italic">--- {subheading} ---</p>
            <p className="border-y-4 py-4 text-3xl uppercase">{heading}</p>
        </div>
    );
};

export default SectionTitle;