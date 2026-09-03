function AdminButton() {

    let isAdmin = true;

    return (
        <>
            {isAdmin && <button>Admin</button>}
        </>
    );
}

export default AdminButton;