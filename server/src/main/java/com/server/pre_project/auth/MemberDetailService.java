package com.server.pre_project.auth;

import com.server.pre_project.Member.entity.Member;
import com.server.pre_project.Member.repository.MemberRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;
import java.util.Optional;

public class MemberDetailService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final MemberAuthority memberAuthority;

    public MemberDetailService(MemberRepository memberRepository, MemberAuthority memberAuthority){
        this.memberRepository = memberRepository;
        this.memberAuthority = memberAuthority;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> optionalMember = memberRepository.findById(username);
        Member finMember = optionalMember.orElseThrow(() -> new RuntimeException());

        return new MemberDetails(finMember);
    }

    private final class MemberDetails extends Member implements UserDetails {
        MemberDetails(Member member) {
            setId(member.getId());
            setName(member.getName());
            setPassword(member.getPassword());
            setRoles(member.getRoles());
        }

        // User의 권한 정보 생성
        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return memberAuthority.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getId();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}