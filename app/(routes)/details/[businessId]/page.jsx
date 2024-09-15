"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

function BuisinessDetails({params}) {
    const { data, status } = useSession();
    const [business, setBusiness] = useState();
    const checkUserAuth = () => { 
        if (status === 'loading') {
        return <div>Loading...</div>
        } else if (status === 'unauthenticated') {
        signIn('descope');
        }
    }
    useEffect(() => {
        checkUserAuth();
    }, [])
    
    const getBusinessById = () => { 
        GlobalApi.getBusinessById(params.businessId).then((res) => { 
            setBusiness(res.businessList)
        })
    }

    useEffect(() => {
        params&&getBusinessById()
    }, [params]);

  return status === 'authenticated' && (
    <div>
      BuisinessDetails
    </div>
  )
}

export default BuisinessDetails
