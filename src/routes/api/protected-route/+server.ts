import { json, error } from '@sveltejs/kit';

export const GET = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();
    if (!session) {
        // user sign is not sign in
        throw error(401, { message: 'Unauthorized' });
    }
    const { data } = await supabase.from('test').select('*');
    return json({ data });
};