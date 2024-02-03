
const DynamicPage = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h1>this is dynamic page {params.id}</h1>
            <h2>Search Params: {searchParams.category} </h2>
        </div>
    );
};

export default DynamicPage;