import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GuardedLink( {to, children, className} ) {
  const navigate = useNavigate();

  const handleClink = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/health");
      if (response.ok) {
        navigate(to);
      } else {
        toast.error("Backend inte tillgänglig just nu.", {
        hideProgressBar: true,
        icon: false,
        style: {
          backgroundColor: '#7f50e4',
          color: 'white'
        }
      });
      }
    } catch {
      toast.error("Kunde inte nå backend.", {
        hideProgressBar: true,
        icon: false,
        style: {
          backgroundColor: '#7f50e4',
          color: 'white'
        }
      });
    }
  }

  return (
    <>
      <Link to={to} onClick={handleClink} className={className}>
        {children}
      </Link>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default GuardedLink;