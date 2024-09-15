"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';

function BusinessDetails({ params }) {
    const { data, status } = useSession();
    const [business, setBusiness] = useState(null);

    useEffect(() => {
        if (status === 'unauthenticated') {
            signIn('descope');
        }
    }, [status]);

    const getBusinessById = async () => {
        try {
            const res = await GlobalApi.getBusinessById(params.businessId);
            setBusiness(res.businessList);
        } catch (error) {
            console.error('Error fetching business details:', error);
        }
    };

    useEffect(() => {
        if (params && params.businessId) {
            getBusinessById();
        }
    }, [params]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'unauthenticated') {
        return null;
    }

    return status === 'authenticated'&&business&&(
        <div className='py-8 md:py-16 px-10 md:px-32'>
            {business ? <BusinessInfo business={business} /> : <div>Loading business details...</div>}
            <div className='grid grid-cols-4 mt-16'>
                <div className='col-span-4 md:col-span-3'>
                <BusinessDescription business={business}/>
                </div>
                <div className='hidden md:block'>
                    <SuggestedBusinessList business={business}/>
                </div>
            </div>
        </div>
    );
}

export default BusinessDetails;
